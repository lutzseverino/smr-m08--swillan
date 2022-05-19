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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate ex in tristique blandit. Quisque posuere suscipit mi at pharetra. Duis pharetra ultrices odio in fermentum. Fusce eleifend condimentum enim, rhoncus tincidunt orci posuere sed. Cras ac congue nunc. Nam sed laoreet magna, a feugiat leo. Morbi egestas ultricies est, non imperdiet eros luctus in. Etiam scelerisque ullamcorper fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin lobortis id odio ut posuere.",
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

  // TODO: Export button to external component
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
          <h4>Recommended courses</h4>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {this.state.availableCourses.map((course) => (
              <div
                key={course.id}
                className={
                  "flex flex-col overflow-hidden rounded-2xl border-[1px] border-black bg-pale-pink transition-all md:h-48 md:flex-row"
                }
              >
                <div className="w-full">
                  <img
                    className="h-52 w-full object-cover "
                    src={course.image}
                    alt={course.title + " image"}
                  />
                </div>
                <div className="flex flex-col md:min-w-[60%] md:max-w-[60%]">
                  <h4 className="px-8 pt-8">{course.title}</h4>
                  <div className="h-full overflow-hidden from-black via-black bg-clip-text px-8 pb-8 md:bg-gradient-to-b md:pb-0 md:text-transparent">
                    <p className="">{course.description}</p>
                  </div>
                  <button className="relative bottom-4 ml-auto mr-4 rounded-2xl bg-cadet px-4 py-2 text-white shadow-xl transition-colors hover:bg-pewter-blue">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
