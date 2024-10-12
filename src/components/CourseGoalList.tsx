import { type FC, type ReactNode } from "react";
import CourseGoal from "./CourseGoal"
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
    goals: Array<CourseGoalType>
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {

  if(goals.length === 0){
    return <InfoBox mode="hint">
        You have no course goals yet. start adding some!
    </InfoBox>
  }

  let warningBox: ReactNode;

  if(goals.length >= 4){
    warningBox = <InfoBox mode="warning" severity="high">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
  }

  return (
    <>
        {warningBox}
        <ul>
            {
                goals.map(goal => (
                <li key={goal.id}>
                    <CourseGoal 
                    id={goal.id}
                    title={goal.title}
                    onDelete={onDeleteGoal}
                    // description="Learn it from the ground up" 
                    >
                    <p>
                        {goal.description}
                    </p>
                    </CourseGoal>
                </li>
                ))
            }
        </ul>
    </>
  )
}

export default CourseGoalList