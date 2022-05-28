import { useDispatch } from "react-redux";
import { clearLetterContext } from "../store/letterReducer";


export default function useClearLetter() {
    const dispatch = useDispatch()
    return () => dispatch(clearLetterContext())
}