<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarHeading, type RangeCalendarHeadingProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

interface HeadingSlot {
  headingValue: string // ou le type approprié selon votre cas d'usage
}

const props = defineProps<RangeCalendarHeadingProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

</script>


<template>
  <RangeCalendarHeading v-slot="{ headingValue }" :class="cn('text-sm font-medium', props.class)"
    v-bind="forwardedProps">
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>
