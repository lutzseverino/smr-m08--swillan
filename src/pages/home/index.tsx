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
          id: 0,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 1,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 2,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 3,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 4,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 5,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 6,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 7,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 8,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 9,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 10,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
        {
          id: 11,
          title: "Dummy course",
          description: "This course doesn't exist, this is a dummy course",
          image: "dummy.png",
        },
      ],
    };
  }

  componentDidMount(): void {
    console.table(this.state.availableCourses);
  }

  // TODO: Fix image scaling on screen devices.
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {this.state.availableCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-row overflow-hidden rounded-2xl bg-cambridge-blue shadow-xl ring-1 ring-black"
              >
                <div>
                  <img
                    className="h-full object-cover"
                    src={course.image}
                    alt={course.title + " image"}
                  />
                </div>
                <div className="flex flex-col object-cover p-8">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
