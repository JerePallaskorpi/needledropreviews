// @flow
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ReviewFullscreen from '../../../ui/blocks/ReviewFullscreen';
import DescriptionView from '../single-review/description/DescriptionView';

type Props = {
    review: Object,
    descDetails: Object,
};

const SingleReviewFullscreenView = ({
    review,
    descDetails,
    handleCloseFullscreen,
    handleFullscreenNav,
}: Props) => (
    <ReviewFullscreen>
        <ReviewFullscreen.ContentWrapper>
            <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={100}>
                <div>
                    <ReviewFullscreen.Video>
                        <iframe
                            title={`${review.details.album} ${review.details.rating}`}
                            src={`https://www.youtube.com/embed/${review.videoId}?theme=light`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </ReviewFullscreen.Video>
                    <DescriptionView
                        summary={descDetails.summary}
                        favTracks={descDetails.favTracks}
                        leastFavTracks={descDetails.leastFavTracks}
                        review={review}
                    />
                </div>
            </Scrollbars>
        </ReviewFullscreen.ContentWrapper>
        <ReviewFullscreen.BottomNav>
            <i className="fas fa-arrow-left" onClick={() => { handleFullscreenNav('prev'); }} />
            <i className="fas fa-times" onClick={handleCloseFullscreen} />
            <i className="fas fa-arrow-right" onClick={() => { handleFullscreenNav('next'); }} />
        </ReviewFullscreen.BottomNav>
    </ReviewFullscreen>
);

export default SingleReviewFullscreenView;
