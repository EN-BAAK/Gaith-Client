"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Variant, SubmitButtonProps } from "../types"

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  isDirty,
  isValid,
  label = "Send",
  submittingLabel = "Sending...",
  disabledLabel = "Please fill out the form",
  className = "",
  variant = "primary",
  onClick,
  Icon,
  iconStyle
}) => {
  const disabled = isSubmitting || !isDirty || !isValid

  let buttonLabel = label
  if (isSubmitting) buttonLabel = submittingLabel
  else if (disabled) buttonLabel = disabledLabel

  const variantClasses: Record<Variant, string> = {
    primary: "bg-primary text-background hover:bg-primary/90",
    "primary-outline":
      "border border-primary text-primary hover:bg-primary hover:text-background",

    accent: "bg-accent text-background hover:bg-accent/90",
    "accent-outline":
      "border border-accent text-accent hover:bg-accent hover:text-background",

    success: "bg-green-600 text-background hover:bg-green-500",
    "success-outline":
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-background",

    danger: "bg-danger text-background hover:bg-danger/90",
    "danger-outline":
      "border border-danger text-danger hover:bg-danger hover:text-background",

    warning: "bg-yellow-500 text-background hover:bg-yellow-400",
    "warning-outline":
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-background",

    transparent: "bg-transparent text-foreground hover:text-foreground/70",
    "transparent-outline":
      "border border-foreground/40 text-background hover:border-foreground hover:text-background",

    "primary-gradient":
      "bg-gradient-to-r from-primary to-green-600 text-background hover:opacity-90",

    "primary-gradient-outline":
      "border border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-green-600 hover:text-background",

    "accent-gradient":
      "bg-gradient-to-r from-accent to-red-600 text-background hover:opacity-90",

    "accent-gradient-outline":
      "border border-accent text-accent hover:bg-gradient-to-r hover:from-accent hover:to-red-600 hover:text-background",
  }

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "w-full rounded-xl py-3.5 transition cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        className
      )}
    >
      {Icon && <Icon className={cn("w-5 h-5", iconStyle)} />}
      <span>{buttonLabel}</span>
    </button>
  )
}

export default SubmitButton
