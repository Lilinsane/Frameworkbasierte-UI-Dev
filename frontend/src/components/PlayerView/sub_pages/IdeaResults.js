import React, { Component } from "react";
import { Button, Box } from "grommet";
import { IdeaTable } from "./idea_components/IdeaTable";
import { QuestionBox } from "../../tools/QuestionBox";

export class IdeaResults extends Component {
  state = {
    data: this.props.data,
    question: this.props.question,
    num_ideas: this.props.num_ideas
  };

  showSummary = () => {};

  render() {
    // const num_ideas = this.props.num_ideas;
    // const question = this.props.question;
    // const data = this.props.data;

    const { data } = this.state;
    const { question } = this.state;
    const { num_ideas } = this.state;

    return (
      <Box direction="column" gap="large" pad="small">
        <QuestionBox question={question} />
        <IdeaTable num_ideas={num_ideas} data={data} />
        <Box direction="column" gap="xsmall" justify="center">
          <Button
            primary
            label="Übersicht anzeigen"
            onClick={this.showSummary}
          />
        </Box>
      </Box>
    );
  }
}

export default IdeaResults;
