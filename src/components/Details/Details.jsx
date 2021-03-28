import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../../styles';

export const removeByIndex = (array, index) => array.filter((_, i) => i !== index);

export const removeDuplicatedSongs = (songAndArtistList, baseSongAndArtistList) => {
  let deDupedListOfSongs = [...baseSongAndArtistList];
  songAndArtistList.forEach((songAndArtist) => {
    if (deDupedListOfSongs.includes(songAndArtist)) {
      deDupedListOfSongs = removeByIndex(deDupedListOfSongs, deDupedListOfSongs.indexOf(songAndArtist));
    }
  });
  return [...deDupedListOfSongs];
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  text-align: center;
  padding-top: 10px;
`;

const DetailsTitle = styled.h6`
  color: ${styles.primaryTextColour};
  font-weight: ${styles.fontWeightBlack};
  font-size: 1.4rem;
  letter-spacing: 0.78px;
  font-family: ${styles.fontFamily};
  padding: 8px 6px;
`;

const DetailsItemText = styled.p`
  color: #fff;
  font-weight: ${styles.fontWeightRegular};
  font-size: 1.4rem;
  letter-spacing: 0.78px;
  padding-top: 8px;
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeightBlack};
`;

const Button = styled.button`
  font-family: ${styles.fontFamily};
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 3px 3px 12px 3px;
  padding: 6px 8px;
  border: 1px solid ${styles.secondaryTextColour};
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #00000080;
  background: none;
  color: ${styles.secondaryTextColour};
  &:hover {
    cursor: pointer;
    border: 1px solid ${styles.secondaryTextColour}cc;
    color: ${styles.secondaryTextColour}cc;
  }
`;

const DetailsContainer = styled.div`
  padding: 10px 0px 20px 0px;
`;

const TitleWithLink = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinkToPartnerAPI = styled.a`
  font-size: 1.4rem;
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeightBlack};
  color: ${styles.secondaryTextColour};
  padding: 8px 0;
`;

const ListContainer = styled.div`
  padding: 6px;
`;

const Details = ({ bpmData, selectedBpm, additionalData, showMore, setShowMore }) => {
  const jsonProvidedListOfSongsFilteredWithBPM = bpmData.filter((item) => selectedBpm === item[2]);
  const apiProvidedListOfSongsFilteredWithBPM = additionalData.filter((item) => selectedBpm === item[2]);
  const apiProvidedListOfSongsWithArtistStrings = apiProvidedListOfSongsFilteredWithBPM.map((song) => `${song[0]} (${song[1]})`);
  const jsonProvidedListOfSongsWithArtistStrings = jsonProvidedListOfSongsFilteredWithBPM.map((song) => `${song[0]} (${song[1]})`);
  const deDupedListOfSongsFromApi = removeDuplicatedSongs(jsonProvidedListOfSongsWithArtistStrings, apiProvidedListOfSongsWithArtistStrings);

  return (
    <DetailsWrapper>
      <DetailsContainer>
        <DetailsTitle>Songs that use this BPM</DetailsTitle>
        <ListContainer>
          {jsonProvidedListOfSongsWithArtistStrings.map((item, i) => (
            <DetailsItemText key={`${item}-${i}`}>{item}</DetailsItemText>
          ))}
        </ListContainer>
      </DetailsContainer>

      {additionalData.length && showMore ? <Button onClick={() => setShowMore(false)}>Show Less</Button> : null}

      {showMore && (
        <DetailsContainer>
          <TitleWithLink>
            <DetailsTitle>Songs that use this BPM provided by the</DetailsTitle>
            <LinkToPartnerAPI href="https://getsongbpm.com/api">GetSongBPM API</LinkToPartnerAPI>
          </TitleWithLink>

          <ListContainer>
            {deDupedListOfSongsFromApi.map((item, i) => (
              <DetailsItemText key={`${item}-${i}`}>{item}</DetailsItemText>
            ))}
          </ListContainer>
        </DetailsContainer>
      )}

      {additionalData.length && !showMore ? <Button onClick={() => setShowMore(true)}>Show More Songs</Button> : null}
    </DetailsWrapper>
  );
};

Details.propTypes = {
  bpmData: PropTypes.array.isRequired,
  selectedBpm: PropTypes.number.isRequired,
  additionalData: PropTypes.array.isRequired,
  showMore: PropTypes.bool.isRequired,
  setShowMore: PropTypes.func.isRequired
};

export default Details;
