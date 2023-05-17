import React from 'react';
import Button from "../../components/button";
import Text from "../../components/text";
import SubTitle from "./_subTitle";
import Basic from "./component/basic";
import Appearance from "./component/appearance";

const ButtonPage = () => {
  return (
    <div>
      <Text
        as={'p'}
        fontSize={25}
        fontWeight={600}
        style={{margin: '16px 0'}}
      >
        Button
      </Text>
      <SubTitle />

      <Basic />
      <Appearance />

      <Button appearance={'primary'}>Primary</Button>
    </div>
  )
}

export default ButtonPage