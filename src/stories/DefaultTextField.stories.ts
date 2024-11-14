import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "Text/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "텍스트 필드의 id",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메시지",
    },
    iconPath: { control: "text", description: "이미지 경로" },
    iconAlt: { control: "text", description: "이미지 설명" },
    isError: { control: "boolean", description: "에러 상태 여부" },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
  },
  args: {
    onIconClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    value: "",
    placeholder: "텍스트를 입력해주세요",
    errorMessage: "텍스트를 확인해주세요",
    iconPath: "/icons/ic_delete_dark.svg",
    iconAlt: "delete_icon",
    isError: false,
  },
};
