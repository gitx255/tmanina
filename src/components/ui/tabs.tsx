"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const ctx = React.useContext(TabsContext)
  if (!ctx) {
    throw new Error("Tabs components must be used within <Tabs>")
  }
  return ctx
}

interface TabsProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

/**
 * Root Tabs component
 * يمسك القيمة الحالية للتبويب ويوفّرها لباقي العناصر
 */
export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (newValue: string) => {
    if (!isControlled) setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue: handleChange }}>
      <div className={cn("w-100", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

/**
 * TabsList: حاوية لأزرار التبويب (Triggers)
 * شكلها Bootstrap nav-pills
 */
export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("nav nav-pills mb-3 bg-body rounded-3 shadow-sm p-2", className)}
        role="tablist"
        {...props}
      />
    )
  }
)
TabsList.displayName = "TabsList"

/**
 * TabsTrigger: زر التبويب
 * يستخدم nav-link من Bootstrap
 */
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: activeValue, setValue } = useTabsContext()
    const isActive = activeValue === value

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "nav-link w-100 rounded-3 d-flex align-items-center justify-content-center gap-2",
          isActive ? "active" : "",
          className
        )}
        onClick={(e) => {
          props.onClick?.(e)
          setValue(value)
        }}
        aria-selected={isActive}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

/**
 * TabsContent: محتوى التبويب
 * يظهر فقط لو value = التبويب النشط
 */
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const { value: activeValue } = useTabsContext()
    const isActive = activeValue === value

    return (
      <div
        ref={ref}
        className={cn("tab-pane fade", isActive && "show active", className)}
        hidden={!isActive}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"
