import React from 'react';
import styles from './Comment.module.css'


function Comment(props) {
    // console.log(horse);
    return (
        <div className={styles.Heading}>
            <div className={styles.panel}>
                <div className={styles.panelBody}>
                    <dl>
                        <dt className={styles.subHeading}>Name: </dt>
                        <dd className={styles.commentText}>{props.comment.creator}</dd>
                        <hr className={styles.lines} />
                        <dt className={styles.subHeading}>Comment: </dt>
                        <dd className={styles.commentText}>{props.comment.comment}</dd>
                        <hr className={styles.lines} />
                    </dl>
                </div>
                <div className={styles.actionBtn}>
                    <button
                        className={styles.panelDeleteBtn}
                        onClick={() => props.handleDeleteComment(props.comment._id)}
                    >
                        DELETE
                </button>
                </div>
            </div>
        </div>
    )
}
export default Comment;