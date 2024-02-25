import DisplayBlock from "../DisplayBlock";
import Button from "../../components/ui/Button";

const ButtonBlocks = () => {
  return (
    <div>
      {" "}
      <DisplayBlock title="Size">
        <Button size="sm">Small</Button>
        <Button>Base</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button disabled>Disabled</Button>
      </DisplayBlock>
      <DisplayBlock title="Variants">
        <Button>Base</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </DisplayBlock>
      <DisplayBlock title="Element">
        <Button>Base</Button>
        <Button as="icon">T</Button>
        <Button as="link">Ghost</Button>
      </DisplayBlock>
      <DisplayBlock title="Button Icon">
        <Button as="icon" size="sm">
          T
        </Button>
        <Button variant="outline" as="icon">
          T
        </Button>
        <Button variant="ghost" as="icon" size="lg">
          T
        </Button>
        <Button as="icon" size="xl">
          T
        </Button>
      </DisplayBlock>
    </div>
  );
};

export default ButtonBlocks;
