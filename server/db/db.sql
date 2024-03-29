CREATE TABLE arcades (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(
        price_range >= 1
        and price_range <= 5
    )
);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    arcade_id BIGINT NOT NULL REFERENCES arcades(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
select *
from arcades
    left join(
        select arcade_id,
            count(*),
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by arcade_id
    ) reviews on arcades.id = reviews.arcade_id;