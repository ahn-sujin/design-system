import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import IconButton from "../components/IconButton";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지 경로" },
    alt: { control: "text", description: "이미지 설명" },
    onClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "/icons/ic_delete_dark.svg",
    alt: "delete_icon",
  },
};
