FROM python:3.13

WORKDIR /code

# because it uses docker cahce for this stpe, can use the docker cache for the next step, which then savesa  lot of time
COPY ./requirements.txt /code/requirements.txt

# for container, pip isnt gonna re-install the packages locally so do --no-cache-dir
# --upgrade if installed already. This  uses docker cache somehow, so when building image repeatedly during development,
# dont need to download/install all dependencies every time.
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# this is what changes most frequently, so put it at the end. almost anything after this will not be able to use the cache
COPY ./app /code/app

CMD ["fastapi", "run", "app/main.py", "--port", "80"]

