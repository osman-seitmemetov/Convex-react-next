import React, {CSSProperties, FC, useState} from "react";
import {FieldError} from "react-hook-form";
import {useUpload} from "@/UI/InputGroup/ImageUploader/useImageUpload";
import styles from "./ImageUploader.module.scss";
import style from "@/UI/InputGroup/AddFile/AddFile.module.scss";

interface ImageUploaderProps {
    value?: string,
    onChange: (...event: any[]) => void,
    placeholder: string,
    error?: FieldError,
    style?: CSSProperties,
    isNoImage?: boolean
}

const ImageUploader: FC<ImageUploaderProps> = ({onChange, placeholder, error, isNoImage = false, style, value}) => {
    const {
        isLoading,
        uploadFile,
        drag,
        dragStartHandler,
        dragLeaveHandler,
        onDropHandler
    } = useUpload(onChange);

    console.log(value)
    return (
        <div>
            <input
                type="file"
                onChange={uploadFile}
                className={styles.input}
                id={placeholder}
            />
            {
                drag
                    ? <label
                        className={styles.dropArea}
                        htmlFor={placeholder}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    >
                        Отпустите файл
                    </label>
                    : <label
                        className={styles.dropArea}
                        htmlFor={placeholder}
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                    >
                        Переместите или выберите файл для загрузки
                    </label>
            }
            {error && <div>{error.message}</div>}
            {!isNoImage && <div>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : value
                            ? <img className={styles.img} alt="" src={`http://localhost:5000/${value}`}/>
                            : <div></div>
                }
            </div>}
        </div>
    );
};

export default ImageUploader;