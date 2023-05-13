import React from 'react';
import Button from "../../components/button";
import Text from "../../components/text";
import Basic from "./_basic";
import Appearance from "./_appearance";

const ButtonPage = () => {
  return (
    <div>
      <Text
        as={'p'}
        fontSize={25}
        fontWeight={600}
        style={{margin: '16px 0'}}
      >
        Button page
      </Text>

      <Basic />
      <Appearance />

      <Button appearance={'primary'}>Primary</Button>
    </div>
  )
}

export default ButtonPage