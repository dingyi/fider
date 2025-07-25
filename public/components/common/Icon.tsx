import React from "react"

interface IconProps {
  sprite: SpriteSymbol | string
  height?: string
  width?: string
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}
export const Icon = (props: IconProps) => {
  if (typeof props.sprite === "string") {
    const styles = { height: props.height && `${props.height}px`, width: props.width && `${props.width}px` }
    return <img style={styles} height={props.height} width={props.width} className={props.className} src={props.sprite} />
  }

  return (
    <svg style={props.style} onClick={props.onClick} height={props.height} width={props.width} className={props.className} viewBox={props.sprite.viewBox}>
      <use xlinkHref={"#" + props.sprite.id} />
    </svg>
  )
}
