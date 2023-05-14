import React from "react"
import { routes } from "../routes";
import RunCircleIcon from '@mui/icons-material/RunCircle';
import ExerciseRegistration from "../../views/Exercises/ExerciseRegistration/ExerciseRegistration";
import Exercises from './../../views/Exercises/Exercises';

const exercises = {
  path: '/exercises',
  name: 'Exercícios',
  icon: RunCircleIcon,
  sidebar: true,
  component: <Exercises/>
}

const exerciseRegistration = {
  path: '/exercises/registration',
  name: 'Registro de exercício',
  component: <ExerciseRegistration/>
}

export const goerRoutes = [
  ...routes,
  exercises,
  exerciseRegistration
]