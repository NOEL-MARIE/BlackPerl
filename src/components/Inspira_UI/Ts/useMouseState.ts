import { ref, readonly } from 'vue'

export function useMouseState() {
  // État privé qui indique si la souris est entrée dans la zone
  const isMouseEntered = ref(false)

  // Fonction pour modifier l’état
  function setMouseEntered(value: boolean) {
    isMouseEntered.value = value
  }

  // On expose une version en lecture seule de l’état pour éviter les modifications extérieures
  return {
    isMouseEntered: readonly(isMouseEntered),
    setMouseEntered,
  }
}
