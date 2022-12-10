// const Header = (props) => {
//   return (<h1>{props.title}</h1>);
// }

// const Content = (props) => {
//   return (
//     <>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </>
//   );
// }

// const Total = (props) => {
//   return (<p>Number of exercises {props.total}</p>);
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header title={course} />
//       <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//       <Total total={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

// export default App;

const Header = (props) => {
  return (<h1>{props.title}</h1>);
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1}  exercise={props.exercises1}/>
      <Part part={props.part2}  exercise={props.exercises2}/>
      <Part part={props.part3}  exercise={props.exercises3}/>
    </>
  );
}

const Part = (props) => {
  return (<p>
    {props.part} {props.exercise}
  </p>);
}

const Total = (props) => {
  return (<p>Number of exercises {props.total}</p>);
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;