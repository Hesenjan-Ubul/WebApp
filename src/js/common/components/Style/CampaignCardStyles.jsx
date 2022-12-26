import styled, { css } from 'styled-components';

export const CandidateCardForListWrapper = styled('div', {
  shouldForwardProp: (prop) => !['limitCardWidth'].includes(prop),
})(({ limitCardWidth }) => (`
  ${limitCardWidth ? 'width: 300px;' : ''}
`));

export const CampaignsNotAvailableToShow = styled('div')(({ theme }) => (`
  color: #555;
  // font-size: 18px;
  text-align: left;
  // margin: 0 2em 6em;
  // ${theme.breakpoints.down('md')} {
  //   font-size: 16px;
  //   margin: 0 1em 5em;
  // }
`));

export const CampaignImageDesktopSharedStyles = css`
  cursor: pointer;
  margin: 0;
  height: 117px;
  // width: 224px;
`;

export const CampaignImageDesktopPlaceholder = styled('div')`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  ${CampaignImageDesktopSharedStyles}
`;

export const CampaignImageDesktop = styled('img')`
  border-radius: 5px;
  ${CampaignImageDesktopSharedStyles}
`;

export const CampaignImageMobileSharedStyles = css`
  cursor: pointer;
  margin: 0;
  max-width: 100%;
`;

export const CampaignImageMobilePlaceholder = styled('div')`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 150px;
  // max-height: 110px;
  ${CampaignImageMobileSharedStyles}
`;

export const CampaignImagePlaceholderText = styled('div')`
  color: #ccc;
`;

export const CampaignImageMobile = styled('img')`
  border-radius: 5px;
  max-height: 150px;
  // max-height: 110px;
  ${CampaignImageMobileSharedStyles}
`;

export const ClickableDiv = styled('div')`
  cursor: pointer;
  width: 100%;
`;

export const ListWrapper = styled('div', {
  shouldForwardProp: (prop) => !['verticalListOn'].includes(prop),
})(({ verticalListOn }) => (`
  display: flex;
  ${verticalListOn ? 'flex-direction: row;' : 'flex-direction: column;'}
`));

export const LoadMoreItemsManuallyWrapper = styled('div')`
  margin-bottom: 0;
  @media print{
    display: none;
  }
`;

export const OneCampaignDescription = styled('div')`
  font-size: 14px;
  margin: 4px 0;
`;

export const OneCampaignInnerWrapper = styled('div', {
  shouldForwardProp: (prop) => !['limitCardWidth'].includes(prop),
})(({ limitCardWidth }) => (`
  display: flex;
  ${limitCardWidth ? 'flex-direction: column-reverse;' : 'flex-direction: row;'}
  ${limitCardWidth ? 'justify-content: flex-start;' : 'justify-content: space-between;'}
  ${limitCardWidth ? 'margin-right: 15px;' : 'margin-bottom: 15px;'}
`));

export const OneCampaignOuterWrapper = styled('div')(({ theme }) => (`
  // border-top: 1px solid #ddd;
  // margin-top: 15px;
  ${theme.breakpoints.up('sm')} {
    // border: 1px solid #ddd;
    // border-radius: 5px;
  }
`));

export const OneCampaignPhotoDesktopColumn = styled('div')`
  margin-bottom: 0;
  margin-left: 15px;
  margin-top: 0;
  height: 117px;
  // width: 224px;
`;

export const OneCampaignPhotoWrapperMobile = styled('div')(({ theme }) => (`
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 8px;
  min-height: 150px;
  // min-height: 110px;
  ${theme.breakpoints.down('xs')} {
    margin-top: 0;
    min-height: auto;
    width: 100%;
  }
`));

export const OneCampaignTextColumn = styled('div')`
  width: 100%;
`;

export const OneCampaignTitle = styled('h1')(({ theme }) => (`
  font-size: 18px;
  margin: 0;
   ${theme.breakpoints.down('sm')} {
    margin-bottom: 4px;
  }
`));

export const SupportersActionLink = styled('span')`
  font-size: 14px;
`;

export const SupportersCount = styled('span')`
  color: #808080;
  font-weight: 600 !important;
  font-size: 14px;
`;

export const SupportersWrapper = styled('div')`
  margin-bottom: 6px;
`;