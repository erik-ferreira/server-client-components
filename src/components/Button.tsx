import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "rounded text-sm font-medium text-zinc-900 data-[success=true]:bg-emerald-400",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-sm",
    },
    status: {
      default: "bg-zinc-50 hover:bg-zinc-100",
      success: "bg-emerald-400 hover:bg-emerald-500",
      danger: "bg-red-400 hover:bg-red-500",
    },
  },
  defaultVariants: {
    size: "default",
    status: "default",
  },
})

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  success?: boolean
}

export function Button({
  success,
  size,
  status,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-success={success}
      className={button({ size, status, className })}
      {...rest}
    />
  )
}
