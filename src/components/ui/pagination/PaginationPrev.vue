<script setup lang="ts">
import {
  Button,
} from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-vue-next'
import { PaginationPrev, type PaginationPrevProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn(' h-10 p-2', props.class)" variant="outline">
      <slot>
        <div class="flex items-center gap-2">
          <!-- <ArrowLeft class="h-4 w-4" /> -->
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6668 6H1.3335M1.3335 6L6.3335 1M1.3335 6L6.3335 11" stroke="#666666" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span>Précédent</span>
        </div>
      </slot>
    </Button>
  </PaginationPrev>
</template>
