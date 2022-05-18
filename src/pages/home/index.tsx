import React from "react";

interface State {
  availableCourses: {
    id: number;
    title: string;
    description: string;
    image?: string;
  }[];
}

export default class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      availableCourses: [
        {
          id: 1,
          title: "Java begginer course",
          description: "Learn the basics of Java",
          image: "java.png",
        },
        {
          id: 2,
          title: "React begginer course",
          description: "Learn the basics of React",
          image: "react.png",
        },
      ],
    };
  }

  componentDidMount(): void {
    console.table(this.state.availableCourses);
  }

  // TODO: Use CSS Grid to display courses and finish styling
  render(): React.ReactNode {
    return (
      <div className="px-8">
        <h1>
          Learn, <br />
          without gates
        </h1>
        <h3>
          Find begginer courses to jump start your programming journey. Without
          even logging in!
        </h3>

        <div className="py-8">
          <h4>Available courses</h4>

          <div className="flex flex-row justify-between">
            {this.state.availableCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col gap-8 rounded-2xl bg-cambridge-blue p-8 shadow-xl ring-1 ring-black"
              >
                <img src={course.image} alt={course.title + " image"} />
                <div>{course.title}</div>
                <div>{course.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
