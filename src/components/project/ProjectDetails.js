export default function ProjectDetails(props) {
  const {id} = props.match.params
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem shut the shizzle up dolor crazy gangsta, consectetuer fo
              shizzle black. Nullam sure velizzle, pizzle volutpizzle,
              suscipizzle , gravida vizzle, i'm in the shizzle. Pellentesque its
              fo rizzle tortizzle. Sed eros. The bizzle izzle bow wow wow
              dapibizzle turpis tempizzle tempor. Mauris pellentesque phat et fo
              shizzle mah nizzle fo rizzle, mah home g-dizzle. Crunk izzle
              tortizzle. Pellentesque eleifend rhoncus mah nizzle. In hac
              habitasse platea dictumst. Away dapibizzle. Cool rizzle uhuh ...
              yih!, pretizzle break yo neck, yall, mattis izzle, eleifend vitae,
              nunc. Phat suscipizzle. Integer sempizzle velit sed purizzle.
            </p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Someone</div>
              <div>2nd Sep, 2am</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
