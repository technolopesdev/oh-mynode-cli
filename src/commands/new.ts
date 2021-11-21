import { GluegunToolbox } from 'gluegun'
import * as shell from 'shelljs'

module.exports = {
    name: 'new',
    alias: ['n'],
    run: async (toolbox: GluegunToolbox) => {
        const { print, parameters } = toolbox;
        if (!shell.which('git')) {
            print.error('It is necessary to have git installed');
            return;
        }
        if (!shell.which('node') || !shell.which('npm')) {
            print.error('It is necessary to have node installed');
            return;
        }
        shell.exec(`git clone https://github.com/technolopesdev/oh-mynode.git ${parameters.options.dir || 'oh-mynode'}`);
        shell.cd(parameters.options.dir || 'oh-mynode')
        print.info('Install dependencies...');
        if (shell.which('yarn')) {
            shell.exec('yarn install')
            return;
        }
        shell.exec('npm install')
    }
}
