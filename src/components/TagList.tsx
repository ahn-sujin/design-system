import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

const TagList = <T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) => {
  const [seletedTag, setSeletedTag] = useState<T>(tagList[0]);

  return (
    <div
      className="flex gap-[8px]"
      onClick={(event) => {
        const eventTarget = event.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === seletedTag}
          onClick={() => setSeletedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
};

export default TagList;
