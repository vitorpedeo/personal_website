import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface PostImageProps {
  src: string;
  altText: string;
}

export function PostImage({ src, altText }: PostImageProps) {
  return (
    <Box my="6" w="full" h={[200, 300, 400]} position="relative">
      <Image
        src={src}
        alt={altText}
        layout="fill"
        objectFit="contain"
        quality={100}
        priority
      />
    </Box>
  );
}
