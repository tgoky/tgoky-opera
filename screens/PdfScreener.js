import React  from 'react';
import Pdf from 'react-native-pdf';





const PdfScreen = ({ route }) => {
  const { pdfUrl } = route.params;

  return (
    <Pdf
      source={{ uri: pdfUrl }}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`current page: ${page}`);
      }}
      onError={(error) => {
        console.log(error);
      }}
      style={styles.pdf}
    />
  );
};


export default PdfScreen;