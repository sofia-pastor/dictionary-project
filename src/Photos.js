export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row row-gap-4 mt-1 mb-1">
            {props.photos.map(function (photo, index) {
              if (index < 6) {
                return (
                  <div className="col-4" key={index}>
                    <a href={photo.urls.full} target="_blank" rel="noreferrer">
                      <img
                        src={photo.urls.regular}
                        alt={photo.alt_description}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
              } else return null;
            })}
          </div>
        </section>
      </div>
    );
  } else return null;
}
