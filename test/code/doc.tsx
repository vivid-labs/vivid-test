import {
  CollapseIcon,
  IconButton,
  PencilIcon,
  useCategories,
  useToggleAll,
} from "@v/sync-core";

export const CardControls = ({
  editing,
  toggleEditing,
}: {
  editing: boolean;
  toggleEditing: () => void;
}) => {
  const categories = useCategories();
  const { closeAll, openAll } = useToggleAll();

  const allClosed = categories.every((c) => !c.open);

  const buttonClasses = "bg-gray-bg-light p-1.5";

  return (
    <div className="flex flex-row h-10 z-10 gap-2">
      <IconButton
        active={editing}
        className={buttonClasses}
        onClick={toggleEditing}
      >
        <PencilIcon />
      </IconButton>
      <IconButton
        className={buttonClasses}
        onClick={allClosed ? openAll : closeAll}
      >
        <CollapseIcon direction={allClosed ? "down" : "up"} />
      </IconButton>
    </div>
  );
};