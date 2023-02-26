import { useMediaQuery } from "react-responsive"

export function useLandscape(orientation = "(orientation: landscape)") {
  return useMediaQuery({
    query: orientation
  })
}

export function usePortrait(orientation = "(orientation: portrait)") {
  return useMediaQuery({
    query: orientation
  })
}

export function useSizeSmall(size = "(max-width: 767px)") {
  return useMediaQuery({
    query: size
  })
}

export function useSizeMedium(size = "(max-width: 991px)") {
  return useMediaQuery({
    query: size
  })
}

export function useSizeLarge(size = "(max-width: 1199px)") {
  return useMediaQuery({
    query: size
  })
}

export function useSizeExtraLarge(size = "(max-width: 1399px)") {
  return useMediaQuery({
    query: size
  })
}
