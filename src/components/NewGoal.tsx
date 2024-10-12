import { type FC, useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {

  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const addGoalHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }  

  return (
    <form onSubmit={addGoalHandler}>
        <p>
            <label htmlFor="goal">
                Your goal
            </label>
            <input id="goal" type="text" ref={goalRef} />
        </p>
        <p>
            <label htmlFor="summary">
                Short summary
            </label>
            <input id="summary" type="text" ref={summaryRef} />
        </p>
        <p>
            <button>
                Add Goal
            </button>
        </p>
    </form>
  )
}

export default NewGoal