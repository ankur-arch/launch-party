import { db } from "../lib/database/db";

const main = async () => {
  console.time("Seeding");
  await db.notes.createMany({
    skipDuplicates: true,
    data: [
      {
        title: "Follow-up Meeting Notes",
        text: "Discussed project milestones, assigned tasks, and set the next meeting for two weeks from today.",
      },
      {
        title: "Conference Presentation Preparation",
        text: "Research latest industry trends, gather data for slides, and rehearse delivery for the upcoming conference.",
      },
      {
        title: "Client Feedback Summary",
        text: "Compiled client feedback from recent surveys and identified areas for improvement to enhance customer satisfaction.",
      },
      {
        title: "Budget Review Meeting Notes",
        text: "Discussed financial performance, analyzed expenses, and proposed cost-saving measures to achieve targets.",
      },
      {
        title: "Team Building Activity Ideas",
        text: "Brainstormed team-building activities for fostering better collaboration and morale among team members.",
      },
      {
        title: "Project Kickoff Meeting Agenda",
        text: "Outlined project goals, assigned roles, and defined the project timeline for successful project initiation.",
      },
      {
        title: "Marketing Strategy Brainstorming",
        text: "Generated innovative marketing ideas to promote the brand and expand the customer base.",
      },
      {
        title: "Quarterly Performance Report",
        text: "Analyzed sales, revenue, and key performance indicators for the last quarter and presented insights to the management.",
      },
      {
        title: "Employee Recognition Program",
        text: "Proposed a new employee recognition program to acknowledge outstanding contributions and boost employee motivation.",
      },
      {
        title: "Business Expansion Opportunities",
        text: "Identified potential areas for business expansion and evaluated risks and benefits for decision-making.",
      },
    ],
  });
  console.timeEnd("Seeding");
};

main();
