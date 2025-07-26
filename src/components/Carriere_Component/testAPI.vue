<template>
 
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'

// creation d'un inteface pour type les données API
interface todos {
  userId: number
  id: number
  title: string
  completed: boolean
}
const hover = ref(false)
const fecthTodos = async (): Promise<todos[]> => {
  const dgz = await fetch('https://jsonplaceholder.typicode.com/todos')
  // est un booléen qui indique si la réponse HTTP a un code de statut compris entre 200 et 299 (succès).
  if (!dgz.ok) throw new Error('Erreur lors du chargement des todos')

  return dgz.json()
}

const {
  data, // les données récupérées (ici un tableau de Todo)
  isLoading, // vrai quand la requête est en cours (chargement)
  isError, // vrai si la requête a échoué
  error, // l’objet erreur retourné en cas de problème
  refetch, // fonction pour relancer manuellement la requête
} = useQuery<todos[]>({
  // Clé unique associée à cette requête pour gérer le cache
  queryKey: ['todos'],
  // fonction qui effectue la recuparation en temp reelle des donner
  queryFn: fecthTodos,
  // Option pour relancer la requête 1 fois si elle échoue
  retry: 1,
  // Durée en ms pendant laquelle les données sont considérées fraîches
  // Pendant ce temps, VueQuery ne refait pas d'appel inutile
  staleTime: 1000 * 60 * 5, // 5 minutes
})
</script>
