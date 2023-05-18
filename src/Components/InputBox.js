import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

export default function InputBox() {
  return (
    <div className="mx-4 ">
      <InputGroup size="md">
        <Input
          h="46px"
          type={"text"}
          fontSize={"sm"}
          border={"1px solid transparent"}
          focusBorderColor="#008000"
          bgColor={"#FFFFFF"}
          placeholder="Message Anshuman"
        />
        <InputRightElement width="5.5rem" className="">
          <IconButton
            h="2rem"
            // size="sm"
            bg={"#ffffff"}
            onClick={() => null}
            icon={<ImAttachment size={22} />}
          ></IconButton>
          <IconButton
            h="2rem"
            // size="2xl"
            bg={"#ffffff"}
            onClick={() => null}
            icon={<AiOutlineSend size={24} />}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
