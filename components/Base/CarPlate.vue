<script lang="ts" setup>
const props = defineProps<{ carPlateNumber: string, region: number, ctx: CanvasRenderingContext2D, carPlateImg: HTMLImageElement, canvas: HTMLCanvasElement }>()

async function drawPlate(text = 'A000AA', region = 177) {
  props.ctx.drawImage(props.carPlateImg, 0, 0)
  props.ctx.font = '38px RoadNumbers'
  props.ctx.fillText(text, 11, 30)
  props.ctx.font = '25px RoadNumbers'
  props.ctx.fillText(region.toString(), 120, 21)
  return props.canvas!.toDataURL()
}
const carPlateUrl = ref("");
onMounted(async () => {
  carPlateUrl.value = await drawPlate(props.carPlateNumber, props.region);
})
</script>
<template>
  <a class="flex justify-center" href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><img :src="carPlateUrl"
      :alt="props.carPlateNumber" /></a>
</template>
