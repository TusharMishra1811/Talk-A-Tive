import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
      <Skeleton height={45} />
    </Stack>
  );
};

export default ChatLoading;
