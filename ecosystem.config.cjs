/**
 * PM2 production config — run TypeScript via tsx
 */
module.exports = {
    apps: [
        {
            name: 'wrapserver',
            script: 'node_modules/tsx/dist/cli.mjs',
            args: 'src/index.ts',
            cwd: '/opt/WrapServer',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '512M',
            env: {
                NODE_ENV: 'production',
            },
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            error_file: './logs/error.log',
            out_file: './logs/output.log',
            merge_logs: true,
        },
    ],
}
