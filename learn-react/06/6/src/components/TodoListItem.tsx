import { useRef, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default function TodoListItem({
	item,
	updateTodo,
	deleteTodo,
}: {
	item: Todo;
	updateTodo: (
		targetId: number,
		updateText: string,
		updateCompleted: boolean,
	) => void;
	deleteTodo: (targetId: number) => void;
}) {
	// 체크박스 클릭 이벤트 감지
	const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateTodo(item.id, item.text, e.target.checked);
	};

	// 수정버튼
	const [isEditable, setIsEditable] = useState(false);
	const editorRef = useRef<HTMLInputElement>(null);

	const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const updateText = editorRef.current?.value || "";
		updateTodo(item.id, updateText, item.completed);
	};

	return (
		<>
			{/* 할 일이 완료되면 .todo__item--complete 추가 */}
			<li id={`todo__${item.id}`} className={`todo__item`}>
				{!isEditable && (
					<>
						<Checkbox
							parentClassName="todo__checkbox-group"
							type="checkbox"
							className="todo__checkbox"
							onChange={checkHandler}
							checked={item.completed}
						>
							{item.text}
						</Checkbox>
					</>
				)}
				{/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
				{isEditable && (
					<>
						<input
							type="text"
							className="todo__modify-input"
							ref={editorRef}
							onKeyDown={keyDownHandler}
						/>
					</>
				)}
				<div className="todo__button-group">
					<Button
						className="todo__action-button"
						onClick={() => setIsEditable(!isEditable)}
					>
						<SvgPencil />
					</Button>
					<Button
						className="todo__action-button"
						onClick={() => deleteTodo(item.id)}
					>
						<SvgClose />
					</Button>
				</div>
			</li>
		</>
	);
}
