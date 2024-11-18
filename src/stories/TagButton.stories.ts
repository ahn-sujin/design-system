import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TagButton from "../components/TagButton";

const meta = {
  title: "Button/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 텍스트" },
    isChecked: { control: "boolean", description: "버튼 비활성화 여부" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TagButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "tag button",
    isChecked: false,
  },
};
