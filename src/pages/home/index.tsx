import React from "react";
import CourseBlock from "../../components/courseblock";

interface HomeState {
  availableCourses: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      availableCourses: [
        {
          id: 0,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate ex in tristique blandit. Quisque posuere suscipit mi at pharetra. Duis pharetra ultrices odio in fermentum. Fusce eleifend condimentum enim, rhoncus tincidunt orci posuere sed. Cras ac congue nunc. Nam sed laoreet magna, a feugiat leo. Morbi egestas ultricies est, non imperdiet eros luctus in. Etiam scelerisque ullamcorper fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lobortis id odio ut posuere.",
          image: "dummy.png",
        },
        {
          id: 1,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "dummy.png",
        },
        {
          id: 2,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "dummy.png",
        },
        {
          id: 3,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "dummy.png",
        },
        {
          id: 4,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "dummy.png",
        },
        {
          id: 5,
          title: "Dummy course",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "dummy.png",
        },
      ],
    };
  }

  render(): React.ReactNode {
    return (
      <div className="px-8 md:px-16">
        <div className="py-8 md:py-32">
          <h1>
            <span className="underline">Learn</span>, without gates
          </h1>
          <h3>
            Find begginer courses to jump start your programming journey.
            Without even logging in!
          </h3>
        </div>

        <div>
          <h4>Recommended courses</h4>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {this.state.availableCourses.map((course) => (
              <CourseBlock
                key={course.id}
                id={course.id}
                image={course.image}
                title={course.title}
              >
                {course.description}
              </CourseBlock>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
