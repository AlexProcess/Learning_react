import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-betweem"
            alignItems="center"
            sx={{ mb: 1, mt: 5 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    28 de Agosto, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    sx={{ border: "none", mb: 1 }}
                ></TextField>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el dia de hoy?"
                    label="Titulo"
                    minRows={5}
                    sx={{ border: "none", mb: 1 }}
                ></TextField>
            </Grid>
            <ImageGallery />
        </Grid>
    );
};
