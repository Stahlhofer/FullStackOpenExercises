const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.value}</p>;
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.namePart} {props.totalPart}
      </p>
    </>
  );
};

const Content = (props) => {
  // console.log(props.data);

  const parts = props.data.map((partData, i) => {
    // console.log(partData, i);
    return (
      <Part key={i} namePart={partData.name} totalPart={partData.exercises} />
    );
  });

  return <>{parts}</>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // organizing the data in an array of objects for possible (not likely) further additions of data
  const dataParts = [
    {
      name: part1,
      exercises: exercises1,
    },
    {
      name: part2,
      exercises: exercises2,
    },
    {
      name: part3,
      exercises: exercises3,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content data={dataParts} />
      <Total value={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
