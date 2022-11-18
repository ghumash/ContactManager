import Caption from "../components/Caption/Caption";
import "./About.css";
import TextContent from "../components/TextContent/TextContent";

export default function About() {
  return (
    <>
      <div className="ListCaption">
        <Caption title={"About"}/>
      </div>
      <div className="About-TextContent">
        <TextContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam aperiam at dicta dolor ea eligendi et excepturi ipsa ipsam molestiae nihil
          nisi nostrum odit quam quos, temporibus unde! Placeat, tempora.
        </TextContent>
        <TextContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </TextContent>
        <TextContent>
          Aliquam aperiam at dicta dolor ea elsam molestiae nihil
          nisi nostrum odit quam quos, temporibus unde! Placeat, tempora.
        </TextContent>
      </div>
    </>
  );
}
