# Atomix
`React` component library. Released under the `MIT licence` as an open-source project.

## Development

### Clone the Repository
The repository containing the component library can be cloned using `HTTPS` or `SSH`:

```shell
# Clone the repository using HTTPS
$ git clone https://github.com/hackdanismo/atomix.git
# Clone the repository using SSH
$ git clone git@github.com:hackdanismo/atomix.git
```

Once cloned, `change directory` into the project folder:

```shell
$ cd atomix
```

Set the `Node` version using `Node Version Manager (nvm)`. This will need to be installed before being used. The `Node` version is specified inside the `.nvmrc` configuration file.

The [Node Version Manager: GitHub page](https://github.com/nvm-sh/nvm).

Install `nvm`:

```shell
# Install nvm using cURL
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
# Install nvm using Wget
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

To use `nvm`:

```shell
# Install the recommended Node version using nvm
$ nvm install
# Use the recommended Node version using nvm
$ nvm use
```

Install the packages and dependencies:

```shell
$ npm install
```

### Setup Vite
`Vite` is used as the build tool for the component library. This does not need to be setup only as a documented step for how the project was created.

To install `Vite`:

```shell
$ npm create vite@latest atomix -- --template react-ts
```

The `--template` is used to tell `Vite` which starter template to use when creating the project. The `react-ts` template selects `React` with `TypeScript`.

As we are building a component library, all initial contents of the `src/` directory have been removed following the `Vite` setup process.