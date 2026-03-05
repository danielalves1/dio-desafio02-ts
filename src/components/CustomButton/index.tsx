import { Button } from "@chakra-ui/react"

export const CustomButton = ({ children, ...props }: any) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}