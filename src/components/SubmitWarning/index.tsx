type SubmitWarningProps = {
    onCancel: () => void;
    onSubmit: () => void;
};

const SubmitWarning = ({ onCancel, onSubmit }: SubmitWarningProps) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-2xl mb-3">Вы уверены?</h2>

            <div className="flex gap-2">
                <button onClick={onCancel}>Отмена</button>
                <button onClick={onSubmit}>Подтвердить</button>
            </div>
        </div>
    );
};

export default SubmitWarning;
