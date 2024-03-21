// import api from '../../utils/api.util';
// import { Container, Button, Card, Figure, ListGroup, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useProvideAuth } from '../../hooks/useProvideAuth';
// import DeleteModal from '../DeleteModal/DeleteModal';
// import TrashIcon from '../icons/TrashIcon';
// import LikeIconFill from '../icons/LikeFillicon';
// import SvgLike from '../icons/LikeIcon';
// import React, { useState } from 'react'
// import { timeSince } from '../../utils/timeSince'
// import { toast } from "react-toastify";
// import useToggle from '../../hooks/useToggle';

// function RecipePost({ recipe: { author, created, ingredients, instructions, reviews, likes } }) {
// const [showDelete, toggleShowDelete] = useToggle();
// const [isDeleted, toggleIsDeleted] = useToggle();

// const renderTooltip = (props) => (
//     <Tooltip className="button-tooltip" {...props}>
//         {likes.map((user) => user.username).join(", ")}
//     </Tooltip>
// );

// let navigate = useNavigate();
// const {
//     state: { user },
// } = useProvideAuth();
// const [likedState, setLiked] = useState();
// const [likesState, setLikes] = useState();

// const handleToggleLike = async () => {
//     if (!likedState) {
//         setLiked(true);
//         setLikes(likesState + 1);
//         try {
//             await api.post(`/posts/like`);
//         } catch (error) {
//             console.log(error);
//             return error;
//         }
//     } else {
//         setLiked(false);
//         setLikes(likesState - 1);
//         try {
//             await api.post(`/posts/like`);
//         } catch (error) {
//             console.log(error);
//             return error;
//         }
//     }
// };

// const handleDeletePost = async () => {
//     try {
//         await api.delete(`/posts`);

//         toggleShowDelete();
//         toggleIsDeleted();
//     } catch (error) {
//         toast.error(`An error occurred deleting recipe.`);
//         toggleShowDelete();
//     }
// };

// if (isDeleted) return <></>;


// return (
//     <>
//         <ListGroup.Item className="text-danger rounded-edge" as={"div"}>
//             <Card className="py-2 px-3 d-flex flex-row gap-3 align-items-start">
{/* <div className="w-100"> */ }
{/* <div className="d-flex align-items-center">
                            <pre className="m-0 text-muted">{" - "}</pre>
                            <span className="text-muted">{timeSince(created)} ago</span>
                        </div> */}
{/* <div className="mb-n1 mt-1 position-relative">
                            <blockquote className="mb-1 mw-100">
                                <div className="mw-100 overflow-hidden">{text}</div>
                            </blockquote>
                        </div> */}

{/* <div className="d-flex justify-content-end align-items-bottom"> */ }
{/* <div className="d-flex align-items-center"> */ }
{/* {user.username === author.username && (
                                    <Container className="close">
                                        <TrashIcon onClick={toggleShowDelete} />
                                    </Container>
                                )} */}
{/* </div> */ }
{/* <div className="d-flex align-items-center mr-2"> */ }
{/* <Button
                                    variant="link"
                                    size="md"
                                    onClick={() => navigate(`/p/${_id}`)}
                                >
                                    <ReplyIcon />
                                </Button> */}
{/* <span>{reviews.length > 0 ? reviews.length : 0}</span> */ }
{/* </div> */ }
{/* <div
                                className={`d-flex align-items-center mr-3 ${likedState ? "isLiked" : ""
                                    }`}
                            > */}
{/* <OverlayTrigger placement="right" overlay={renderTooltip} delay={{ show: 200, hide: 400 }}>
                                    <Button variant="link" size="md" onClick={handleToggleLike}>
                                        {likedState ? <LikeIconFill /> : <SvgLike />}
                                    </Button>
                                </OverlayTrigger> */}


{/* <span>{likesState}</span> */ }
{/* </div> */ }
{/* </div> */ }
{/* </div> */ }
{/* </Card>
            </ListGroup.Item> */}

{/* <DeleteModal
                show={showDelete}
                handleClose={toggleShowDelete}
                handleDelete={handleDeletePost}
            /> */}
{/* </>
    )
}

export default RecipePost; */}