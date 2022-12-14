import cls from "./TriangleCanvas.module.scss"
import {classNames} from "shared/lib/classNames/classNames";

interface TriangleCanvasProps {
    className?: string
}

export const TriangleCanvas = (props: TriangleCanvasProps) => {
    const {className} = props;
    return (
            <div className={classNames(cls.TriangleCanvas)}>
                Треугольник
            </div>
    );
};
