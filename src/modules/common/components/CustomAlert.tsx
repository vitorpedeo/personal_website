import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from '@chakra-ui/react';

interface CustomAlertProps extends AlertProps {
  title: string;
  description: string;
}

export function CustomAlert({ title, description, ...rest }: CustomAlertProps) {
  return (
    <Alert
      py="8"
      borderRadius={8}
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <AlertIcon w="40px" h="40px" mr="0" />
      <AlertTitle my="4" fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
    </Alert>
  );
}
